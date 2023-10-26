using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoApplication.DataContextConfig;
using ToDoApplication.Dto;
using ToDoApplication.Entity;

namespace ToDoApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public ToDoController(DataContext dataContext)
        {
            _dataContext = dataContext; 
        }

        [HttpGet]
        public async Task<ActionResult<List<ToDo>>> getAllToDo()
        {
            return Ok(await _dataContext.ToDos.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<ToDo>> addToDo([FromBody] ToDoDto toDoDto)
        {
            ToDo newToDo = new ToDo (toDoDto.Title, toDoDto.Text);
            await _dataContext.ToDos.AddAsync(newToDo);
            await _dataContext.SaveChangesAsync();
            return Ok(newToDo);
        }   
    }
}
