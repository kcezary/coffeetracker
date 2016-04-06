using DataAnnotationsExtensions;
using System;
using System.ComponentModel.DataAnnotations;

namespace CoffeeTracker.Model
{
    public class CoffeeEntry
    {
        public int Id { get; set; }

        [Min(0)]
        public decimal ItemPrice { get; set; }

        [Min(1)]
        public int Quantity { get; set; }

        [MaxLength(56)]
        [Required]
        public string CoffeeType { get; set; }

        [MaxLength(32)]
        [Required]
        public string Location { get; set; }

        public DateTime Date { get; set; }
    }
}
