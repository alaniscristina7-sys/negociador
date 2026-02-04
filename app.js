/**
 * PORTAL V10.1 - MONITOR IMPORT
 */

// --- SEED COMPLETO ---
const DEFAULT_PORTAL_DATA = {
    homeCards: [
        { title: "Script Atualizado", desc: "Confira o novo fluxo de atendimento.", tag: "SCRIPT", link: "updates-script" },
        { title: "Operador x Negociador", desc: "A postura correta para converter.", tag: "DIFERENÇAS", link: "updates-diff" },
        { title: "Quebra de Promessa", desc: "Como agir com firmeza.", tag: "ESTRATÉGIA", link: "updates-promise" }
    ],
    menuItems: [
        { id: "atualizacoes", label: "Atualizações" },
        { id: "script_introducao", label: "Script de Introdução" },
        { id: "objecoes", label: "Objeções" },
        { id: "argumentacao_perfil", label: "Argumentação por Perfil" },
        { id: "negociacoes", label: "Negociações" },
        { id: "reforco_combinado", label: "Reforço do combinado" },
        { id: "consequencias_atraso", label: "Consequências do Atraso" },
        { id: "checklist_negociador", label: "Checklist do Negociador" },
        { id: "checklist_monitoria", label: "Checklist de Monitoria" },
        { id: "mensagens_oficiais", label: "Mensagens Oficiais" },
        { id: "faq", label: "FAQ" }
    ],
    sections: {
        "updates-script": { title: "Atualizações", blocks: [{ title: "Últimas Atualizações", content: "<p><strong>03/02/2026:</strong> Revisão completa dos fluxos de objeção para contemplados.<br><strong>20/01/2026:</strong> Inclusão de novas perguntas de sondagem.</p>", subs: [] }] },
        "updates-diff": { title: "Diferenças", blocks: [{ title: "Operador x Negociador", content: "<p>O atendente apenas repassa informações. O negociador constrói soluções.<br>Foco na solução, postura ativa e perguntas estratégicas.</p>", subs: [] }] },
        "updates-promise": { title: "Estratégia", blocks: [{ title: "Quebra de Promessa", content: "<p>1. Não acuse. Pergunte o que houve.<br>2. Reforce o combinado.<br>3. Gere novo compromisso com data imediata.</p>", subs: [] }] },
        "atualizacoes": { title: "Atualizações", blocks: [{ title: "Versão 10.0", content: "<p>Portal com script completo e modo gerencial integral.</p>", subs: [] }] },
        "script_introducao": {
            title: "Script de Introdução",
            blocks: [
                { title: "Abordagem", content: `<p>“Nome do cliente”<br>Espera responder...<br>“Bom dia, meu nome é [Seu nome], falo da Âncora Consórcios, tudo bem?<br>Para prosseguirmos com o atendimento, por segurança, poderia confirmar os três primeiros dígitos do seu CPF?”</p>`, subs: [] },
                { title: "Sondagem", content: `<p>“Meu contato é referente ao seu consórcio, cota XX, grupo XX, que se encontra em atraso há Y dias.<br>O valor atualizado da parcela hoje é de R$ XXX,XX. Sobre esse atraso, gostaria de entender qual o motivo do não pagamento”</p>`, subLabel: "Clique aqui e acesse os possíveis motivos e como contorná-los", subs: [{ title: "Desemprego", body: `<p>“Entendi, [nome]. E é justamente por isso que a gente precisa agir com estratégia agora — para não deixar acumular e virar um problema maior.<br>Me diz só uma coisa: você está sem renda total ou tem algum valor de apoio/extra temporário?”</p>` }, { title: "Saúde", body: `<p>“Sinto muito por isso. Mas vou te ajudar a encontrar uma solução realista, para que você consiga manter seu consórcio ativo e com as parcelas em dia.”</p>` }, { title: "Cliente deseja cancelar", body: `<p>“Entendo o desejo de cancelar, [nome]. Mas cancelar agora pode te gerar perda financeira. Antes de tomar essa decisão, vou te ajudar a encontrar uma alternativa para manter sua cota ativa.”</p>` }, { title: "Valor da parcela alta", body: `<p>“Entendo, [nome do cliente]. Para que você consiga permanecer com a cota ativa e sem novos atrasos devido ao valor da parcela — principalmente porque atrasos geram um acréscimo ainda maior por conta dos encargos — hoje vou resolver essa questão para você.”</p>` }, { title: "Data de vencimento", body: `<p>“Entendo perfeitamente. Entretanto, [nome do cliente], é importante deixar claro que a alteração da data de vencimento de um participante, desestabiliza todo o grupo. Portanto, não é possível a alteração do vencimento, conforme consta em contrato. Mas vamos juntos encontrar uma solução para o atraso.”</p>` }] },
                { title: "Negociação", content: `<p>“Diante da proposta anterior, consigo gerar e enviar o boleto com o vencimento para hoje, pelo WhatsApp ou e-mail, qual você prefere?”<br>A prioridade sempre será o pagamento integral.<br>Caso ele não consiga o pagamento integral:</p>`, subLabel: "Clique aqui para acessar as possíveis negociações", subs: [{ title: "CARTÃO DE CRÉDITO – NEGOCIAÇÃO FORTE", body: `<p>💳 <strong>CARTÃO DE CRÉDITO</strong></p><p>“Além do boleto, consegui também a opção de pagamento via cartão de crédito. Podendo até parcelar, porém, dependendo da quantidade de parcelas terá acréscimo. Antes de seguirmos, preciso entender o que faz mais sentido para o senhor: prefere dividir em mais parcelas, com um valor que caiba melhor no seu orçamento, ou em menos parcelas para quitar o atraso mais rápido?”</p><br><strong>Mais parcelas:</strong><p>Não ofereça de imediato a possibilidade em 21x para não impactar as próximas parcelas, portanto inicie aos poucos e se necessário aumente.<br>“Parcelado ficaria 5 vezes de R$ XX.<br>Posso te encaminhar o link agora pelo WhatsApp para formalizarmos?”</p><br><strong>Quitar o atraso mais rápido:</strong><p>“É possível fazer em 2x de R$ XX. “Parcelado ficaria 5 vezes de R$ XX.<br>Posso te encaminhar o link agora pelo WhatsApp para formalizarmos?”</p>` }, { title: "Possibilidades de acordos (SELECIONE)", body: `<p>Verifique o perfil do cliente:</p>[BUTTON:acordo_sem_bem:Acordos não Contemplados / Sem Bem]<br>[BUTTON:acordo_com_bem:Acordos Contemplados com Bem]` }] }
            ]
        },
        "acordo_sem_bem": {
            title: "Acordos (Sem Bem)",
            blocks: [
                { title: "RATEIO", content: `<p>“Para te ajudar a regularizar essas parcelas em atraso, consegui a possibilidade de realizarmos o rateio.<br>Vou te explicar.<br>Vamos pegar as duas parcelas em atraso e diluir nas próximas parcelas a vencer.”<br>“Para formalizar, ao invés de quitar as duas parcelas em atraso, você realiza apenas o pagamento da parcela do mês.<br>Com isso, formalizamos o acordo e os valores diluídos retornam a partir do mês XX, mantendo sua participação na assembleia.”<br>Realize a simulação e informe ao cliente.</p>`, subs: [] },
                { title: "PROGRAMAÇÃO", content: `<p>“Outra alternativa que consegui para você hoje é a programação das parcelas em atraso.<br>Nesse modelo, as parcelas vencidas ficam programadas para pagamento no momento da contemplação.”<br>“Para formalizar, você paga apenas a parcela do mês XX.<br>Pagando a parcela do mês, sua cota permanece ativa e você tem a oportunidade de participar da assembleia normalmente.”</p>`, subs: [] },
                { title: "REDUÇÃO", content: `<p>“Conforme seu perfil, consegui hoje uma proposta especial: a redução de até XX% do valor da parcela por um período de 12 meses”<br>👉 Realizar simulação na planilha<br>“O valor atual da sua parcela é R$ XXX.<br>Com o acordo, ela ficará em R$ XXX pelos próximos 12 meses.<br>Após esse período, as parcelas restantes ficam aproximadamente em R$ XXX até o término do contrato.”<br>“Essa é uma condição pontual, pensada exclusivamente para manter sua permanência no consórcio.<br>Podemos prosseguir com o acordo?”</p>`, subs: [] }
            ]
        },
        "acordo_com_bem": { title: "Acordo (Com Bem)", blocks: [{ title: "Acordo a Termo", content: `<p>“É possível realizarmos um acordo onde você paga a parcela do mês e as parcelas em atraso de (mês) serão parceladas em até 12x no boleto sem juros e multa, você efetuando o pagamento da parcela do mês e me enviando o comprovante enviaremos o contrato para efetivação e a negativação registrada será retirada dentro de 5 dias, vamos seguir e já manter seu contrato em dia?”</p>`, subs: [] }] },
        "objecoes": { title: "Objeções", blocks: [{ title: "Objeção do cliente contemplado com bem", content: `<p>Veja abaixo os detalhes por tipo:</p>`, subLabel: "Clique para expandir", subs: [{ title: "1. Contemplação – Outros bens e serviços", body: `<p>Nos contratos de consórcio contemplados para outros bens e serviços, não há um bem específico alienado. Nesses casos, a cobrança pode ocorrer por meio de medidas judiciais, incluindo:<br>Bloqueio de bens e valores do consorciado;<br>Bloqueio de contas bancárias;<br>Acionamento dos fiadores, quando houver.<br>A ordem costuma iniciar pelos garantidores, podendo haver penhora ou bloqueio de bens imóveis ou valores pertencentes a terceiros que figuram como fiadores no contrato.</p>` }, { title: "2. Consórcio de automóvel", body: `<p>No consórcio de veículo, o bem é dado em garantia por alienação fiduciária.<br>A principal medida é a ação de busca e apreensão do veículo, que será utilizado para quitar o saldo devedor da cota.<br>Caso o valor do veículo não seja suficiente para quitar integralmente o saldo devedor, o cliente permanece responsável pelo valor residual.<br>Nesse cenário, podem ser adotadas medidas como negativação do CPF/CNPJ e protesto em cartório.<br>Importante destacar que a cobrança não se limita apenas ao veículo alienado. Também podem ser adotadas ações judiciais para bloqueio de outros bens e valores do consorciado, a fim de garantir o cumprimento da obrigação contratual.</p>` }, { title: "3. Consórcio de imóvel", body: `<p>No caso de imóvel, o procedimento ocorre por meio da chamada consolidação da propriedade, que é realizada de forma extrajudicial.<br>Isso ocorre porque, no contrato de alienação fiduciária, o cliente possui apenas a posse direta do imóvel. A propriedade permanece em nome da administradora de consórcio até a quitação total da cota.<br>Com a inadimplência, a administradora pode retomar o imóvel dado em garantia.<br>Assim como nos demais casos, a cobrança não fica restrita apenas ao imóvel alienado, podendo alcançar outros bens e valores do consorciado por meio de medidas judiciais.</p>` }, { title: "4. Consórcio de ouro", body: `<p>O processo do consórcio de ouro é diferente, pois o bem fica em custódia de uma empresa especializada.<br>Inicialmente, o cliente é notificado para regularizar o pagamento.<br>Caso não haja pagamento no prazo, o ouro é vendido pela custodiante, e o valor é utilizado para quitar o saldo devedor da cota.<br>Se o valor do ouro não for suficiente para cobrir o saldo devedor, o cliente permanece responsável pela diferença, podendo ocorrer negativação e protesto.</p>` }] }] },
        "argumentacao_perfil": { title: "Argumentação", blocks: [{ title: "Argumentação", content: "<p>Utilize as seções de Negociação e Objeções para encontrar argumentos específicos.</p>", subs: [] }] },
        "negociacoes": { title: "Negociações", blocks: [{ title: "Fluxo", content: `<p>Priorize pagamento integral.<br>Opções disponíveis:</p>`, subLabel: "Abrir opções de negociação", subs: [{ title: "Cartão / Parcelamento", body: "<p>Ver seção Script de Introdução > Negociação</p>" }, { title: "Acessar Acordos", body: `[BUTTON:acordo_sem_bem:Acordos Sem Bem]<br>[BUTTON:acordo_com_bem:Acordos Com Bem]` }] }] },
        "reforco_combinado": { title: "Reforço e Encerramento", blocks: [{ title: "Reforço do combinado", content: `<p>“Então ficou combinado o pagamento hoje no valor de R$ XX.<br>Já encaminhei o boleto/link para seu WhatsApp (ou e-mail).<br>Conto com a sua pontualidade conforme combinamos”</p>`, subs: [] }, { title: "Encerramento + NPS", content: `<p>“Ao final, você receberá uma pesquisa sobre meu atendimento e sobre a Âncora Consórcios. Sua avaliação é muito importante para continuarmos melhorando nossa experiência.<br>Agradeço sua atenção, desejo um ótimo dia.”</p>`, subs: [] }] },
        "consequencias_atraso": { title: "Consequências do Atraso", blocks: [{ title: "Não Contemplado", content: `<p>“Além de evitar encargos e o cancelamento da cota, o pagamento em dia garante sua participação nas assembleias, e evita novas cobranças”</p>`, subs: [] }, { title: "Contemplado Sem Bem", content: `<p>“A pontualidade é essencial para evitar o cancelamento da cota e a consequente descontemplação, além de encargos como juros e multa e novos contatos de cobrança.”</p>`, subs: [] }, { title: "Contemplado com bem", content: `<p>“Reforço a importância desse pagamento conforme alinhamos, para evitar acréscimos de juros, multa, honorários, além de restrições em seu nome, ações judiciais ou novos protestos.<br>Regularizando hoje, evitamos novas medidas de cobrança.”</p>`, subs: [] }] },
        "checklist_negociador": { title: "Checklist Negociador", blocks: [{ title: "Checklist", content: "<p>(Em breve)</p>", subs: [] }] },
        "checklist_monitoria": { title: "Checklist Monitoria", blocks: [{ title: "Checklist", content: "<p>Ainda não há checklist importado. Faça login como admin para importar planilha.</p>", subs: [] }] },
        "mensagens_oficiais": { title: "Mensagens Oficiais", blocks: [{ title: "Mensagens", content: "<p>(Em breve)</p>", subs: [] }] },
        "faq": { title: "FAQ", blocks: [{ title: "Perguntas Frequentes", content: "", subLabel: "Clique para ver respostas", subs: [{ title: "O cliente pode alterar a data de vencimento de seu consórcio", body: `<p>Não, conforme consta em contrato de adesão, segundo a Lei 11.795, Art. 10 e 14, o cliente não pode alterar a data de vencimento, uma vez que o consórcio baseia-se na união de pessoas com o mesmo objetivo. A alteração da data de vencimento de um participante individualmente desestabiliza o fluxo de caixa, o fundo comum e a realização de assembleias.</p>` }, { title: "Se o cliente cancelar, o que acontece", body: `<p>Será descontada uma multa contratual de 20%, e valores destinados à taxa administrativa, fundo de reserva e seguro, se houver, não serão devolvidos. O cliente passará a participar dos sorteios de cotas canceladas (são feitos 2 sorteios). Caso ele seja contemplado, o atendimento entrará em contato com o cliente para devolução dos valores. Caso não seja contemplado em nenhum dos sorteios, o cliente terá o valor devolvido 60 dias após a finalização de seu grupo.</p>` }, { title: "Quanto de encargos é cobrado", body: `<p><strong>Não Contemplado e Contemplado sem Bem:</strong> Juros > 01% ao mês; Multa > 02% sobre o valor da parcela<br><strong>Contemplado com bem:</strong> Além de juros e multa + Honorários 10% a 30% dependendo da quantidade em atraso</p>` }] }] }
    },
    monitorData: null // { importedAt: '', rows: [] }
};

// --- GLOBAL STATE ---
let PortalData = {};
let AppState = { isAdmin: false, currentSectionId: null, editingTarget: null, tempImport: [], tempHeaders: [] };

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => { Data.load(); Render.all(); });

// --- DATA ---
const Data = {
    load: () => {
        try {
            const saved = localStorage.getItem('anchor_portal_v11');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed && parsed.sections && parsed.menuItems) PortalData = parsed;
                else PortalData = JSON.parse(JSON.stringify(DEFAULT_PORTAL_DATA));
            } else PortalData = JSON.parse(JSON.stringify(DEFAULT_PORTAL_DATA));

            // Migrate missing monitorData if old version
            if (PortalData.monitorData === undefined) PortalData.monitorData = null;

        } catch (e) { PortalData = JSON.parse(JSON.stringify(DEFAULT_PORTAL_DATA)); }
    },
    save: () => { localStorage.setItem('anchor_portal_v11', JSON.stringify(PortalData)); Render.all(); },
    reset: () => { if (confirm("Resetar?")) { localStorage.removeItem('anchor_portal_v11'); PortalData = JSON.parse(JSON.stringify(DEFAULT_PORTAL_DATA)); Render.all(); alert("Resetado"); } },
    export: () => {
        const url = URL.createObjectURL(new Blob([JSON.stringify(PortalData, null, 2)], { type: 'application/json' }));
        Object.assign(document.createElement('a'), { href: url, download: 'backup.json' }).click();
    },
    import: (input) => { /* Reuse logic */ const f = input.files[0]; if (f) { const r = new FileReader(); r.onload = e => { try { PortalData = JSON.parse(e.target.result); Data.save(); location.reload(); } catch (x) { alert('Inválido'); } }; r.readAsText(f); } }
};

// --- RENDER ---
const Render = {
    all: () => { Render.menu(); Render.home(); if (AppState.currentSectionId) Render.content(AppState.currentSectionId); Admin.ui.updateVisibility(); },
    menu: () => document.getElementById('menu-list-render').innerHTML = PortalData.menuItems.map(i => `<button class="menu-btn" onclick="Layout.openSection('${i.id}')"><i class="bi bi-dot"></i> ${i.label}</button>`).join(''),
    home: () => document.getElementById('home-grid-render').innerHTML = PortalData.homeCards.map((c, i) => `<div class="p-card" onclick="Layout.openSection('${c.link}')"><span class="tag">${c.tag}</span><h3>${c.title}</h3><p>${c.desc}</p>${AppState.isAdmin ? Admin.ui.homeCardControls(i) : ''}</div>`).join(''),
    content: (id) => {
        if (id === 'checklist_monitoria') return Render.monitoria(id);

        const sec = PortalData.sections[id];
        document.getElementById('section-title-display').innerText = sec.title;
        document.getElementById('monitoria-tools').style.display = 'none';

        document.getElementById('content-blocks-render').innerHTML = sec.blocks.map((b, i) => `
            <div class="content-block">
                ${AppState.isAdmin ? Admin.ui.blockControls(id, i) : ''}
                <h4>${b.title}</h4>
                <div>${processText(b.content)}</div>
                ${b.subs.length || b.subLabel ? `<button class="sub-action-btn" onclick="Layout.toggleSubList('sl-${i}')">${b.subLabel || 'Ver mais'} <i class="bi bi-chevron-down"></i></button><div id="sl-${i}" style="display:none;margin-top:10px;">${b.subs.map((s, si) => `<div class="sub-acc-item"><div class="sub-acc-head" onclick="Layout.toggleAcc(this)"><span>${s.title}</span><div>${AppState.isAdmin ? Admin.ui.subControls(id, i, si) : ''}<i class="bi bi-plus-lg"></i></div></div><div class="sub-acc-body">${processText(s.body)}</div></div>`).join('')}${AppState.isAdmin ? `<button class="btn btn-sm btn-outline-success w-100 mt-2" onclick="Admin.actions.addSubItem('${id}',${i})">+ Sub</button>` : ''}</div>` : ''}
            </div>
        `).join('');
    },

    // --- SPECIAL CHECKLIST RENDERER ---
    monitoria: (id) => {
        const sec = PortalData.sections[id];
        document.getElementById('section-title-display').innerText = sec.title;
        document.getElementById('monitoria-tools').style.display = AppState.isAdmin ? 'block' : 'none'; // Only admin sees import btn

        const container = document.getElementById('content-blocks-render');
        container.innerHTML = '';

        if (PortalData.monitorData && PortalData.monitorData.rows.length > 0) {
            // Group By Category
            const groups = {};
            PortalData.monitorData.rows.forEach(r => {
                const cat = r.categoria || 'Geral';
                if (!groups[cat]) groups[cat] = [];
                groups[cat].push(r);
            });

            let html = '';
            for (const [cat, items] of Object.entries(groups)) {
                html += `<div class="content-block">`;
                html += `<h4 class="text-white border-bottom border-secondary mb-3 pb-2">${cat}</h4>`;

                items.forEach(item => {
                    html += `
                    <div style="background:rgba(255,255,255,0.05); padding:15px; border-radius:12px; margin-bottom:12px; border:1px solid rgba(255,255,255,0.1);">
                        <div class="d-flex justify-content-between align-items-start">
                             <div style="flex:1;">
                                 <div class="fw-bold text-teal mb-1" style="font-size:15px;">${item.criterio}</div>
                                 ${item.descricao ? `<div class="small text-muted mb-2">${item.descricao}</div>` : ''}
                                 ${item.exemplo ? `<div style="font-size:12px; background:rgba(33,161,151,0.1); padding:8px; border-radius:6px; color:#fff;" class="mt-2"><strong class="text-teal">Exemplo:</strong> ${item.exemplo}</div>` : ''}
                             </div>
                             <div class="badge bg-secondary ms-2" style="font-size:13px;">${item.peso} pts</div>
                        </div>
                    </div>`;
                });

                html += `</div>`;
            }
            container.innerHTML = html;
        } else {
            // Fallback content if empty
            container.innerHTML = sec.blocks.map((b, i) => `
                <div class="content-block">
                    ${AppState.isAdmin ? Admin.ui.blockControls(id, i) : ''}
                    <h4>${b.title}</h4>
                    <div>${b.content}</div>
                </div>`).join('');
        }
    }
};

// --- MONITOR MODULE (NEW) ---
const Monitor = {
    openImportModal: () => {
        document.getElementById('monitor-file-upload').value = null;
        document.getElementById('monitor-preview-area').style.display = 'none';
        new bootstrap.Modal(document.getElementById('monitoriaImportModal')).show();
    },

    // File change handler is inline in index.html ? No, let's attach listener to file input
    handleFileSelect: (evt) => {
        const file = evt.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const json = XLSX.utils.sheet_to_json(firstSheet, { header: 1 }); // Array of Arrays

            if (json.length < 2) return alert("Planilha vazia ou sem cabeçalho");

            AppState.tempHeaders = json[0];
            AppState.tempImport = json.slice(1);

            Monitor.renderPreview(json);
        };
        reader.readAsArrayBuffer(file);
    },

    renderPreview: (rows) => {
        const table = document.getElementById('monitor-preview-table');
        const headers = rows[0];

        let html = `<thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
        // Show max 5 rows
        const limit = Math.min(rows.length, 6);
        for (let i = 1; i < limit; i++) {
            html += `<tr>${rows[i].map(c => `<td>${c || ''}</td>`).join('')}</tr>`;
        }
        html += `</tbody>`;
        table.innerHTML = html;

        // Populate Selects
        const selects = ['col-criterio', 'col-peso', 'col-cat', 'col-desc', 'col-ex'];
        selects.forEach(selId => {
            const sel = document.getElementById(selId);
            sel.innerHTML = `<option value="">(Selecione)</option>` + headers.map((h, i) => `<option value="${i}">${h}</option>`).join('');

            // Auto Select
            const lowerH = headers.map(h => String(h).toLowerCase());
            if (selId === 'col-criterio') { const idx = lowerH.findIndex(h => h.includes('critério') || h.includes('criterio')); if (idx >= 0) sel.value = idx; }
            if (selId === 'col-peso') { const idx = lowerH.findIndex(h => h.includes('peso') || h.includes('pontos')); if (idx >= 0) sel.value = idx; }
            if (selId === 'col-cat') { const idx = lowerH.findIndex(h => h.includes('cat') || h.includes('grupo')); if (idx >= 0) sel.value = idx; }
            if (selId === 'col-desc') { const idx = lowerH.findIndex(h => h.includes('desc') || h.includes('obs')); if (idx >= 0) sel.value = idx; }
            if (selId === 'col-ex') { const idx = lowerH.findIndex(h => h.includes('exemplo')); if (idx >= 0) sel.value = idx; }
        });

        document.getElementById('monitor-preview-area').style.display = 'block';
    },

    processImport: () => {
        const idxCrit = document.getElementById('col-criterio').value;
        const idxPeso = document.getElementById('col-peso').value;

        if (idxCrit === "" || idxPeso === "") return alert("Selecione as colunas obrigatórias (Critério e Peso).");

        const idxCat = document.getElementById('col-cat').value;
        const idxDesc = document.getElementById('col-desc').value;
        const idxEx = document.getElementById('col-ex').value;

        const result = [];
        AppState.tempImport.forEach(row => {
            if (!row[idxCrit]) return; // Skip empty criterion
            result.push({
                criterio: row[idxCrit],
                peso: row[idxPeso] || 0,
                categoria: idxCat !== '' ? row[idxCat] : 'Geral',
                descricao: idxDesc !== '' ? row[idxDesc] : '',
                exemplo: idxEx !== '' ? row[idxEx] : ''
            });
        });

        PortalData.monitorData = {
            importedAt: new Date().toISOString(),
            rows: result
        };

        Data.save();
        bootstrap.Modal.getInstance(document.getElementById('monitoriaImportModal')).hide();
        Render.monitoria('checklist_monitoria'); // Refresh view
        alert("Importado com sucesso! " + result.length + " critérios.");
    }
};

// Start Listener
document.addEventListener('DOMContentLoaded', () => {
    const inp = document.getElementById('monitor-file-upload');
    if (inp) inp.addEventListener('change', Monitor.handleFileSelect);
});

// --- LAYOUT & ADMIN (UNCHANGED LOGIC) ---
const Layout = { enterApp: () => { document.getElementById('splash-screen').style.opacity = 0; setTimeout(() => { document.getElementById('splash-screen').style.display = 'none'; document.getElementById('app-container').style.display = 'flex'; }, 500); }, toggleMenu: () => { const el = document.getElementById('mainMenu'); const bs = bootstrap.Offcanvas.getInstance(el) || new bootstrap.Offcanvas(el); bs.toggle(); }, openSection: (id) => { if (!PortalData.sections[id]) { if (AppState.isAdmin) { PortalData.sections[id] = { title: "Nova Seção", blocks: [] }; Data.save(); } else return; } AppState.currentSectionId = id; Render.content(id); document.getElementById('content-overlay').classList.add('active'); const m = bootstrap.Offcanvas.getInstance(document.getElementById('mainMenu')); if (m) m.hide(); }, closeSection: () => { document.getElementById('content-overlay').classList.remove('active'); AppState.currentSectionId = null; Layout.toggleMenu(); }, toggleSubList: (id) => { const el = document.getElementById(id); el.style.display = el.style.display === 'none' ? 'block' : 'none'; }, toggleAcc: (h) => { const b = h.nextElementSibling; b.style.display = b.style.display === 'block' ? 'none' : 'block'; } };
function processText(t) { if (!t) return ""; return t.replace(/\[BUTTON:(.*?):(.*?)]/g, (m, k, l) => `<button class="btn btn-sm btn-outline-info w-100 my-2 text-uppercase fw-bold" onclick="Layout.openSection('${k}')" style="border-color:var(--teal);color:var(--teal);padding:12px;">${l} <i class="bi bi-arrow-right"></i></button>`); }
const Admin = { state: {}, auth: { login: () => { if (document.getElementById('pass-input').value === 'Âncora2026@@') { AppState.isAdmin = true; bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide(); document.getElementById('admin-tools-panel').style.display = 'block'; Render.all(); alert("Modo Gerencial Ativo"); } else alert("Senha Incorreta"); }, logout: () => { AppState.isAdmin = false; document.getElementById('pass-input').value = ""; document.getElementById('admin-tools-panel').style.display = 'none'; Render.all(); alert("Encerrado"); } }, ui: { toggleLogin: () => { new bootstrap.Modal(document.getElementById('loginModal')).show(); }, updateVisibility: () => { const d = AppState.isAdmin ? 'block' : 'none'; document.getElementById('admin-badge').classList.toggle('show', AppState.isAdmin); document.getElementById('btn-add-home-card').style.display = d; document.getElementById('btn-add-block').style.display = d; document.getElementById('btn-edit-menu').style.display = d; document.body.classList.toggle('admin-mode', AppState.isAdmin); }, homeCardControls: (i) => `<div class="admin-controls-inline" onclick="event.stopPropagation()"><button class="btn-adm btn-adm-edit" onclick="Admin.actions.editHomeCard(${i})">EDIT</button><button class="btn-adm btn-adm-del" onclick="Admin.actions.delHomeCard(${i})">DEL</button></div>`, blockControls: (sid, bi) => `<div class="admin-controls-inline"><button class="btn-adm btn-adm-edit" onclick="Admin.actions.editBlockText('${sid}',${bi})">EDIT BLK</button><button class="btn-adm btn-adm-del" onclick="Admin.actions.delBlock('${sid}',${bi})">DEL</button></div>`, subControls: (sid, bi, si) => `<span onclick="event.stopPropagation()" style="margin-right:10px;"><button class="btn-adm btn-adm-edit" onclick="Admin.actions.editSub('${sid}',${bi},${si})">E</button><button class="btn-adm btn-adm-del" onclick="Admin.actions.delSub('${sid}',${bi},${si})">X</button></span>` }, actions: { editHomeCard: (i) => { AppState.editingTarget = { type: 'homeCard', idx: i }; const c = PortalData.homeCards[i]; document.getElementById('card-edit-title').value = c.title; document.getElementById('card-edit-desc').value = c.desc; document.getElementById('card-edit-tag').value = c.tag; const s = document.getElementById('card-edit-link'); s.innerHTML = Object.keys(PortalData.sections).map(k => `<option value="${k}">${PortalData.sections[k].title}</option>`).join(''); s.value = c.link; new bootstrap.Modal(document.getElementById('cardEditorModal')).show(); }, saveHomeCard: () => { const t = AppState.editingTarget; if (t.type !== 'homeCard') return; PortalData.homeCards[t.idx].title = document.getElementById('card-edit-title').value; PortalData.homeCards[t.idx].desc = document.getElementById('card-edit-desc').value; PortalData.homeCards[t.idx].tag = document.getElementById('card-edit-tag').value; PortalData.homeCards[t.idx].link = document.getElementById('card-edit-link').value; Data.save(); bootstrap.Modal.getInstance(document.getElementById('cardEditorModal')).hide(); }, delHomeCard: (i) => { if (confirm("Excluir?")) { PortalData.homeCards.splice(i, 1); Data.save(); } }, editBlockText: (sid, bi) => { AppState.editingTarget = { type: 'block', secId: sid, bIdx: bi }; const b = PortalData.sections[sid].blocks[bi]; document.getElementById('editor-textarea').value = `<h1>${b.title}</h1>\n${b.content}`; new bootstrap.Modal(document.getElementById('textEditorModal')).show(); }, saveTextEdit: () => { const t = AppState.editingTarget; const val = document.getElementById('editor-textarea').value; if (t.type === 'block') { const p = val.split('\n'); PortalData.sections[t.secId].blocks[t.bIdx].title = p[0].replace(/<h1>|<\/h1>/g, ''); PortalData.sections[t.secId].blocks[t.bIdx].content = p.slice(1).join('\n'); Data.save(); bootstrap.Modal.getInstance(document.getElementById('textEditorModal')).hide(); } }, addBlock: () => { if (!AppState.currentSectionId) return; PortalData.sections[AppState.currentSectionId].blocks.push({ title: "Novo", content: "<p>Conteúdo</p>", subs: [] }); Data.save(); }, delBlock: (sid, bi) => { if (confirm("Excluir?")) { PortalData.sections[sid].blocks.splice(bi, 1); Data.save(); } }, addSubItem: (sid, bi) => { PortalData.sections[sid].blocks[bi].subs.push({ title: "Item", body: "<p>...</p>" }); Data.save(); }, editSub: (sid, bi, si) => { AppState.editingTarget = { type: 'sub', secId: sid, bIdx: bi, sIdx: si }; const s = PortalData.sections[sid].blocks[bi].subs[si]; document.getElementById('sub-edit-title').value = s.title; document.getElementById('sub-edit-body').value = s.body; new bootstrap.Modal(document.getElementById('subitemEditorModal')).show(); }, saveSubItem: () => { const t = AppState.editingTarget; if (t.type !== 'sub') return; PortalData.sections[t.secId].blocks[t.bIdx].subs[t.sIdx].title = document.getElementById('sub-edit-title').value; PortalData.sections[t.secId].blocks[t.bIdx].subs[t.sIdx].body = document.getElementById('sub-edit-body').value; Data.save(); bootstrap.Modal.getInstance(document.getElementById('subitemEditorModal')).hide(); }, delSub: (sid, bi, si) => { if (confirm("Excluir?")) { PortalData.sections[sid].blocks[bi].subs.splice(si, 1); Data.save(); } }, addMenuItem: () => { const l = document.getElementById('new-menu-label').value; const k = document.getElementById('new-menu-key').value; if (l && k) { PortalData.menuItems.push({ id: k, label: l }); if (!PortalData.sections[k]) PortalData.sections[k] = { title: l, blocks: [] }; Data.save(); Admin.modals.openMenuManager(); } }, delMenuItem: (i) => { if (confirm("Excluir?")) { PortalData.menuItems.splice(i, 1); Data.save(); Admin.modals.openMenuManager(); } } }, modals: { openMenuManager: () => { const l = document.getElementById('menu-manager-list'); l.innerHTML = PortalData.menuItems.map((m, i) => `<div class="d-flex justify-content-between align-items-center bg-black p-2 border border-secondary rounded"><span>${m.label} <small class="text-muted">(${m.id})</small></span><button class="btn btn-sm btn-danger" onclick="Admin.actions.delMenuItem(${i})">X</button></div>`).join(''); new bootstrap.Modal(document.getElementById('menuManagerModal')).show(); } } };
