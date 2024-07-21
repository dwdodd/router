import layout from "../layouts/layout.js";

const notfound = (page) => {
    const content = `
    <h1 class="text-3xl font-bold mb-4">404 Not found</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div class="bg-white p-4 rounded shadow-md">
            <p>Página (${page}) no encontrada.</p>
        </div>
    </div>
`;
    return layout(content);
}

export default notfound;