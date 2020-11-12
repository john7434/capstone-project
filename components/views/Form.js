export default () => `

<center>
<form class="form" action="https://formspree.io/f/xqkglebv" method="POST">
  <p class="form">
    <label class="form">Your Name: <input type="text" name="name" /></label>
  </p>
  <p class="form">
    <label class="form">Your Email: <input type="email" name="email" /></label>
  </p>
  <p class="form">
    <label class="form">Submission Type: <select name="role[]" multiple>
      <option class="form">Client</option>
      <option class="form">Admin</option>
      <option class="form">Queries</option>
    </select></label>
  </p>
  <p class="form">
    <label class="form">Message: <textarea name="message"></textarea></label>
  </p>
  <p class="form">
    <button type="submit">Send</button>
  </p>
</form>
</center>`;
