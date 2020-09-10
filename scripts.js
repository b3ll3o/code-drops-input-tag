
const tags = [];
const tagContainer = document.querySelector('.tag-container');
const input = tagContainer.querySelector('input');

input.onkeyup = e => {
  const keyPressedIsEnter = e.key == 'Enter';

  if(keyPressedIsEnter){

    input.value.split(',').forEach(tag => {
      if(tag)
        tags.push(tag.trim());
    });
    updateTags();
    input.value = '';
  }
}

function updateTags(){
  
  clearTags();

  tags.slice().reverse().forEach(tag => {
    tagContainer.prepend(createTag(tag));
  })
}

function createTag(tag){
  const div = document.createElement('div');
  div.classList.add('tag');

  const span = document.createElement('span');
  span.innerHTML = tag;

  div.append(span);

  const i = document.createElement('i');
  i.classList.add('close');
  i.setAttribute('data-id', tag);
  i.onclick = removeTag;

  span.append(i);

  return div;
}

function removeTag(e){
  const closeButton = e.currentTarget;
  const id = closeButton.dataset.id;
  const index = tags.indexOf(id);

  tags.splice(index, 1);

  updateTags();
}

function clearTags(){
  tagContainer.querySelectorAll('.tag').forEach(tagElement => 
    tagElement.remove());
}