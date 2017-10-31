export default interface RecipeInterface {
    id: string;
    name: string;
    desc: string;
    img: string;
    author: string;
    ingredients: string[];
    steps: string[];
    tags: string[];
}