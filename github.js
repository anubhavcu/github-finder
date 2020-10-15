class Github {
  constructor () {
    this.client_id = '5ea88204bffa2d9f75ab';
    this.client_secret = 'a45d40b50d8f1176dd3ad894310b3acbcae4a0ca';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    //get all repos for the user 
    // const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);


    // get latest(repos_sort) 5(repos_count) repos 
    // const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    // const repos = await repoResponse.json();

    // console.log(repos);

    // not calling repo for now to prevent number of calls 
    // return { profile, repos };
    return { profile };
  }

}


// github api links 

//search for repositories containing keywords in readme 
// https://api.github.com/search/repositories?q=pathfinding-visualizer+in:readme&type=repository 

// https://api.github.com/search/repositories?q=labyrinth+in:readme&type=repository

//searching for a repository 
// https://api.github.com/search/repositories?q=demo-streaming&type=repository

// searching for repos for a particular user 
// https://api.github.com/repos/anubhavcu/pathfinding-visualizer


// stackoverflow link for reference  
// https://stackoverflow.com/questions/53747159/whats-the-correct-endpoint-to-access-github-repositories-on-github-api