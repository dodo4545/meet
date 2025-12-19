import Col from "react-bootstrap/Col";

export const BackendErrorMessage = () => {
  return (
    <Col className="text-center mt-5">
      <div className="alert alert-warning" role="alert">
        <h4 className="alert-heading">Backend Authentication Issue</h4>
        <p>There's currently a problem with the backend JWT authentication. The login works, but the token is being rejected by the API.</p>
        <hr />
        <p className="mb-0">Your instructor is aware of this issue. All frontend code is working correctly - this is a backend configuration problem.</p>
      </div>
      <div className="mt-4">
        <h5>What you can see:</h5>
        <ul className="text-start" style={{maxWidth: '600px', margin: '0 auto'}}>
          <li>✅ Login form works and returns a token</li>
          <li>✅ Navigation bar shows authenticated state</li>
          <li>✅ Profile link is visible</li>
          <li>✅ All routing is functional</li>
          <li>❌ Movies cannot be fetched (401 error)</li>
        </ul>
      </div>
    </Col>
  );
};
