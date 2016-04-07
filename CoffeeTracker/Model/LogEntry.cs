using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoffeeTracker.Model
{
    [Table("Log")]
    public class LogEntry
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        [MaxLength(50)]
        public string Level { get; set; }
        [MaxLength(300)]
        public string Logger { get; set; }
        [MaxLength(300)]
        public string MachineName { get; set; }
        [MaxLength(300)]
        public string Identity { get; set; }
        public string Message { get; set; }
        public string Exception { get; set; }
        public string Stacktrace { get; set; }
    }
}
