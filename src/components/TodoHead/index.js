import './TodoHead.scss';

function TodoHead({ todos }) {
  const undoneTodos = todos.filter((todo) => !todo.done);
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  const onClickSignOut = () => {
    // TODO: 로그아웃 로직 작성
    window.sessionStorage.removeItem('isAuthenticated');
    window.location.reload();
  }

  return (
    <div className="head-container">
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="info-bar">
        <div className="todos-left">할 일 {undoneTodos.length}개 남음</div>
        <div onClick={onClickSignOut}>로그아웃</div>
      </div>
    </div>
  );
}

export default TodoHead;
