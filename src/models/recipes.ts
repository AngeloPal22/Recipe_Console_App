export interface recipe {
    id?: number;
    user_id: number;
    category: string;
    name: string;
    ingredients: string;
    steps: string;
    lastEditedBy: string;
    created_at: string;
    updated_at: string;
}

export interface recipeView extends recipe {
      createdBy: string;
}