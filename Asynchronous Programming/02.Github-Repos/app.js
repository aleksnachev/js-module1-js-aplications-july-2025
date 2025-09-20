function loadRepos() {
	const username = document.getElementById('username').value
	const url = `https://api.github.com/users/${username}/repos`
	const reposRef = document.getElementById('repos')
	reposRef.innerHTML = ''
	fetch(url)
		.then(resp => resp.json())
		.then(data => data.map(a => reposRef.innerHTML += `<li><a href="${a.html_url}">${a.full_name}</a></li>`))
		.catch(err => console.error(err))
}