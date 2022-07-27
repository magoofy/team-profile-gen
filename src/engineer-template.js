const engineerTemplate = (data) => 
`
  <div class="card m-3 shadow" style="width: 300px">
    <div class="card-header bg-warning text-white">
      <p class="h3">${data.name}</p>
      <p class="h4">
      <i class="fa-solid fa-code-branch"></i>
        ${data.constructor.name}
      </p>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group">
        <li class="list-group-item">
          <span class="font-weight-bold">ID: </span>
          ${data.id}
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold">Email: </span>
          <a href="mailto:${data.email}">${data.email}</a>
        </li>
        <li class="list-group-item">
          <span class="font-weight-bold">GitHub: </span>
          <a href="http://www.github.com/${data.github}">${data.github}</a>
        </li>
      </ul>
    </div>
  </div>
`;

export { engineerTemplate };