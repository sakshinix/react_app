

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  
  <div class="form-group">
    <label for="exampleFormControlSelect1">Select Year</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>FE</option>
      <option>SE</option>
      <option>TE</option>
      <option>ME</option>
      <option>MBA</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">select Department</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>Computer</option>
      <option>Information Technology</option>
      <option>Electrical</option>
      <option>Mechanical</option>
      <option>ENTC</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default App;
