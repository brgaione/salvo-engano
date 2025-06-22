const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
let searchIndex = null;

// Carrega o índice de busca
async function loadSearchIndex() {
    if (searchIndex === null) {
        try {
            const response = await fetch('/index.json');
            const data = await response.json();
            searchIndex = data.items;
        } catch (error) {
            console.error('Erro ao carregar o índice de busca:', error);
        }
    }
}

// Função para normalizar texto (remover acentos e converter para minúsculas)
function normalizeText(text) {
    return text.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase();
}

// Função de busca
async function performSearch(query) {
    await loadSearchIndex();
    if (!searchIndex) return [];
    
    const normalizedQuery = normalizeText(query);
    
    return searchIndex.filter(item => {
        const normalizedTitle = normalizeText(item.title);
        const normalizedContent = normalizeText(item.content_text);
        const normalizedTags = item.tags ? item.tags.map(normalizeText) : [];
        
        return normalizedTitle.includes(normalizedQuery) ||
               normalizedContent.includes(normalizedQuery) ||
               normalizedTags.some(tag => tag.includes(normalizedQuery));
    });
}

// Renderiza os resultados da busca
function renderSearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<p>Nenhum resultado encontrado.</p>';
        return;
    }

    const html = results.map(item => `
        <article class="search-result">
            <h3><a href="${item.url}">${item.title}</a></h3>
            <p>${item.summary}</p>
            ${item.tags ? `
                <div class="tags">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            ` : ''}
            ${item.periodos ? `
                <div class="periodo">Período: ${item.periodos.join(', ')}</div>
            ` : ''}
            ${item.escolas ? `
                <div class="escola">Escola: ${item.escolas.join(', ')}</div>
            ` : ''}
        </article>
    `).join('');

    searchResults.innerHTML = html;
}

// Event listener para a busca
if (searchInput) {
    let debounceTimer;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        const query = e.target.value;
        
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        debounceTimer = setTimeout(async () => {
            const results = await performSearch(query);
            renderSearchResults(results);
        }, 300);
    });
}
