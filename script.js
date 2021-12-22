window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    document.getElementById("navbar").style.background = "#132538";
    document.getElementById("more").style.background = "#132538";
  } else {

    document.getElementById("navbar").style.background = "none";
    document.getElementById("more").style.background = "none";
  }

}

//NAME
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//COMMENT
const submit = document.querySelector('.comment-submit');
const commentList = document.querySelector('.comments');
const commentInput = document.querySelector('.comment-input');

const enter = document.querySelector('.name-enter');
const usernameList = document.querySelector('.usernames');
const usernameInput = document.querySelector('.username-input');

function template(data) {
  commentList.insertAdjacentHTML("beforeend", `
  <div class="comment flex items-start justify-start">
      <div class="flex-1">
        <h3 class="comment-author">${data.author}</h3>
        <p class="comment-body">${data.comment}</p>
      </div>
    </div>
  </div>`);
}

function appendComment(event) {
  const data = {
    comment: commentInput.value,
    author: usernameInput.value
  };

  event.preventDefault();
  // If the value is nothing just return
  if (commentInput.value.length < 1) return;

  // Insert new template into DOM
  template(data);

  // Reset textrea value
  commentInput.value = "";

  // Save the list to localStorage
  localStorage.setItem('commentListing', commentList.innerHTML);
  localStorage.setItem('usernameListing', usernameList.innerHTML);
}

submit.addEventListener('click', appendComment, false)

// Check for saved wishlist items
const saved = localStorage.getItem('commentListing');
const savedd = localStorage.getItem('usernameListing');

// If there are any saved items, update our list
if (saved) {
  commentList.innerHTML = saved;
}
if (savedd) {
  usernameList.innerHTML = saved;
}
