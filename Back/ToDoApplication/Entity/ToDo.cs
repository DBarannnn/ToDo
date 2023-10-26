namespace ToDoApplication.Entity
{
    public class ToDo
    {

        public ToDo(string title, string text)
        {
            this.Title = title;
            this.Text = text;
        }
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }

    }
}
