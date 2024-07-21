const section = (content) => `
<div class="flex">
    <section class="flex-1 overflow-auto p-5 ml-0 min-h-screen bg-slate-200">
        <div class="container mx-auto">
            ${content}
        </div>
    </section>
</div>
`;
export default section;