document.addEventListener("DOMContentLoaded", function () {

  const toolbar = document.querySelector(".toolbar");

  if (!toolbar) return;

  toolbar.innerHTML = `
    <button class="btn back" onclick="history.back()">← Back</button>

    <a href="dashboard.html" class="btn">🏠 Home</a>

    <button class="btn" onclick="window.print()">🖨 Print</button>

    <button id="editBtn" onclick="unlockForEdit()" class="btn edit" style="display:none;">✏️ Edit</button>

    <button onclick="clearForm()" class="btn">Clear</button>

    <button onclick="saveForm()" class="btn save">Save</button>
  `;
});
