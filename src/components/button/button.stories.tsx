
export default {
  title: 'Button'
}

export const withText = () => '<jsm-button>Hello World</jsm-button>'

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};
