

//これがビュー
todo.view = function() {
  return <html>
          <body>
            <input onchange={ m.withAttr("value", todo.vm.description)} value={todo.vm.description()} />
            <button onclick={todo.vm.add}>追加</button>
            <table>
              {todo.vm.list.map(function(task, index) {
                return <tr>
                         <td>
                           <input type="checkbox" onclick={m.withAttr("checked", task.done)} checked={task.done()} />
                         </td>
                         <td style={task.done() ?'text-decoration: line-through' : 'text-decoration: none'}>
                          {task.description()}
                         </td>
                       </tr>
              })}
            </table>
          </body>
        </html>
};

//アプリケーションの初期化
m.mount(document, {controller: todo.controller, view: todo.view});
