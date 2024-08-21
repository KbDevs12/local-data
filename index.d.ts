declare module "@kang-bakso-development/local-data" {
  export function getAll(filename: string): Record<string, any>;
  export function getById(filename: string, id: string): any;
  export function create(filename: string, data: any): string | null;
  export function add(filename: string, data: any): string | null;
  export function update(filename: string, id: string, data: any): boolean;
  export function deleteById(filename: string, id: string): boolean;
}
