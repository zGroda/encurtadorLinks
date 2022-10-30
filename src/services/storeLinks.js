//buscar os links salvos
export async function getLinksSaved(key) {
	const myLinks = await localStorage.getItem(key);
	let savedLinks = JSON.parse(myLinks) || [];
	return savedLinks;
}

//salvar um link no localstorage
export async function saveLink(key, newLink) {
	let linkStored = await getLinksSaved(key);

	//verifica se já existe algum link igual salvo
	const hasLinks = linkStored.some((link) => link.id === newLink.id);

	//caso exista um link igual ele encerra avisando que já esta cadastrado
	if (hasLinks) {
		console.log('Esse link já esta cadastrado.');
		return;
	}

	//adiciona o link no array/lista de links
	linkStored.push(newLink);

	//salva os links no localstorage
	await localStorage.setItem(key, JSON.stringify(linkStored));
	console.log('Link salvo com sucesso.');
}

//delete
export async function deleteLink(links, id) {
	let myLinks = links.filter((item) => {
		return item.id !== id;
	});

	localStorage.setItem('@encurtalink', JSON.stringify(myLinks));

	return myLinks;
}
