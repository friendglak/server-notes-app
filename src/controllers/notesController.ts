import { Request, Response } from "express";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const SupabaseUrl = process.env.SUPABASE_URL!;
const SupabaseKey = process.env.SUPABASE_API_KEY!;
export const supabase = createClient(SupabaseUrl, SupabaseKey);

export const getAllNotes = async (_: Request, response: Response) => {
  try {
    const { data, error } = await supabase.from("notes").select('*');
    if (error) {
      throw error;
    }
    return response.json(data);
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const getNoteById = async (request: Request, response: Response) => {
  try {
    const { data, error } = await supabase
      .from("notes")
      .select()
      .eq("id", request.params.id)
      .order("id", { ascending: true });

    if (error) {
      throw error;
    }
    return response.json(data);
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const createNote = async (request: Request, response: Response) => {
  try {
    const { data, error } = await supabase.from("notes").insert(request.body);

    if (error) {
      throw error;
    }

    return response.status(201).json(data);
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateNote = async (request: Request, response: Response) => {
  try {
    const { data: updatedData, error: updatedError } = await supabase
      .from("notes")
      .update({
        title: request.body.title,
        content: request.body.content,
        tags: request.body.tags,
      })
      .eq("id", request.params.id);

    if (updatedError) {
      throw updatedError;
    }

    const { data, error } = await supabase.from("notes").select();

    if (error) {
      throw error;
    }

    return response.json(data);
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteNote = async (request: Request, response: Response) => {
  try {
    const { data, error } = await supabase
      .from("notes")
      .delete()
      .eq("id", request.params.id);

    if (error) {
      throw error;
    }

    const { data: newData, error: newError } = await supabase
      .from("notes")
      .select();

    if (newError) {
      throw newError;
    }

    return response.json(newData);
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};
