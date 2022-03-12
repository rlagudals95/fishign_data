// 정적생성 x
function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `에러 발생 ${statusCode}`
        : `
            클라이언트 측에 에러가 있습니다.`}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return statusCode;
};

export default Error;
