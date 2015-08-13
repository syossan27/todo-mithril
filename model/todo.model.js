//このアプリケーションは、todoコンポーネントを1つだけ持つ
var todo = {};

//コードをシンプルにするために、このコンポーネントをモデルクラスの名前空間としても流用する

//Todoクラスは2つのプロパティを持つ
todo.Todo = function(data) {
    this.description = m.prop(data.description);
    this.done = m.prop(false);
};

//TodoListクラスはtodoの配列
todo.TodoList = Array;

//ビュー・モデルは表示されているTodoのリストを管理し、
//作成が完了する前のTodoの説明を格納したり、
//作成が可能かどうかを判定するロジックや、
//Todoが追加された後にテキスト入力をクリアする責務を持つ
todo.vm = (function() {
    var vm = {}
    vm.init = function() {
        //アクティブなToDoのリスト
        vm.list = new todo.TodoList();

        //新しいToDoを作成する前の、入力中のToDoの名前を保持するスロット
        vm.description = m.prop("");

        //ToDoをリストに登録し、ユーザが使いやすいようにdescriptionフィールドをクリアする
        vm.add = function() {
            if (vm.description()) {
                vm.list.push(new todo.Todo({description: vm.description()}));
                vm.description("");
            }
        };
    }
    return vm
}())
