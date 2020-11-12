export default () => `

<center>
<form class="form"
  action="https://formspree.io/f/xqkglebv"
  method="POST"
>
  <label>
    Your email:
    <input type="text" name="_replyto">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>

  <!-- your other form fields go here -->

  <button type="submit">Send</button>
</form>
</center>
`;
