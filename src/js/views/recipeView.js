class RecipeView {
  #parentElement = document.querySelector('.recipe');
  #data;

  render(data) {
    this.#data = data;
    console.log(data);
  }
}

export default new RecipeView();
