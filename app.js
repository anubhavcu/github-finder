//init github 
const github = new Github;

// init ui class 
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  // get input text 
  const userText = e.target.value;

  if (userText !== '') {
    // console.log(userText)

    // make http call 
    github.getUser(userText)
      .then(data => {
        console.log(data);
        if (data.profile.message === 'Not Found') {
          // console.log('User not found..');
          //Show alert - user not found 

          ui.showAlert('User Not Found !', 'alert alert-danger');

        } else {
          // show profile
          ui.showProfile(data.profile);
          // ui.showRepos(data.repos);
        }
      });
  } else {
    // clear profile 
    ui.clearProfile();

  }

});