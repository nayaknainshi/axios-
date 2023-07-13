function getTodos() {
    console.log('GET Request');
  }
  
  function addTodo() {
    console.log('POST Request');
  }
  
  function updateTodo() {
    console.log('PUT/PATCH Request');
  }

  function removeTodo() {
    console.log('DELETE Request');
  }
  
  function getData() {
    console.log('Simultaneous Request');
  }
  
  function customHeaders() {
    console.log('Custom Headers');
  }
  
  function transformResponse() {
    console.log('Transform Response');
  }
  
  function errorHandling() {
    console.log('Error Handling');
  }
  
  function cancelToken() {
    console.log('Cancel Token');
  }
  
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('