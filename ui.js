class UI {
  constructor () {
    this.profile = document.getElementById('profile');

  }
  showProfile(user) {
    // console.log(user);
    this.profile.innerHTML = `
  <div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <div>
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mt-2 mb-2"> View Profile </a> 
        <button class="btn btn-danger btn-block mt-2 mb-2"> Save as Bookmark </button> 
        </div>
      </div>
      <div class="col-md-9">
        <span class="badge badge-primary m-1"> Public Repos: ${user.public_repos} </span>
        <span class="badge badge-secondary m-1"> Public Gists: ${user.public_gists} </span>
        <span class="badge badge-success m-1"> Followers: ${user.followers} </span>
        <span class="badge badge-info m-1"> Following: ${user.following} </span>
        <br> <br> 
        <ul class="list-group">
        <li class="list-group-item">Name: ${user.name} || Handle: ${user.login}</li>
            <li class="list-group-item">Company: ${user.company} </li>
            <li class="list-group-item">Blog/Website: <a href="${user.blog}" target="_blank"> ${user.blog} </a> </li>
            <li class="list-group-item">Location: ${user.location} </li>
            <li class="list-group-item">Member Since: ${user.created_at} </li>
        </ul>
      </div>
      
    </div>
  </div>
  <h3 class="page-heading mb-3"> Latest Repos </h3> 
  <div id="repos"> </div> 
    `;
  }

  // show user repos 
  showRepos(repos) {
    let output = '';

    // if user doesn't have any repos
    // if (repos.length === 0) {
    //   output += ` 
    //     <div class='card card-body mb-2'> 
    //     <div class="row"> 
    //     <div class="col-md-6 bg-warning"> 
    //     No Repositories yet ! 
    //     </div>
    //     </div> 
    //     </div>
    //     `;
    // }
    // // if there is repos 
    // else {
    repos.forEach((repo) => {
      output += ` 
        <div class='card card-body mb-2'> 
        <div class="row"> 
        <div class="col-md-6"> 
        <a href="${repo.html_url}" target="_blank"> ${repo.name}</a> 
        </div>
        <div class="col-md-6"> 
        <span class="badge badge-primary m-1"> Stars: ${repo.stargazers_count} </span>
        <span class="badge badge-secondary m-1"> Watchers: ${repo.watchers_count} </span>
        <span class="badge badge-success m-1"> Forks: ${repo.forks_count} </span>
        <span class="badge badge-warning m-1"> Issues: ${repos.open_issues} </span>
        </div>
        </div> 
        </div>
        `;
    });
    // }

    // output the repositories 
    document.getElementById('repos').innerHTML = output;
  }

  // show alert when profile not found 
  showAlert(message, className) {
    // clear any existing alerts if any 
    this.clearAlert();

    // create div 
    const div = document.createElement('div');
    //add classes 
    div.className = className;
    // add text 
    div.appendChild(document.createTextNode(message));
    //get parent 
    const container = document.querySelector('.searchContainer');
    //get search box 
    const search = document.querySelector('.search');
    //insert alert 
    // parentNode.insertBefore(newNode, existingNode)
    container.insertBefore(div, search);

    // timeout after 3 seconds 
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //clear alert message 
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // clear page when input field is empty 
  clearProfile() {
    this.profile.innerHTML = '';
  }
}