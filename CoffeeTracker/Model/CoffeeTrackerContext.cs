using System.Data.Entity;

namespace CoffeeTracker.Model
{
    public class CoffeeTrackerContext : DbContext
    {
        public DbSet<CoffeeEntry> CoffeeEntries { get; set; }
        public DbSet<LogEntry> Log { get; set; }

        public CoffeeTrackerContext() 
            : base("CoffeeTrackerContextConnectionString")
        {
            Database.SetInitializer(new MockDataDatabaseInitializer());
        }
    }
}
