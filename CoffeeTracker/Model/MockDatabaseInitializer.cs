using EntityFramework.BulkInsert.Extensions;
using System;
using System.Collections.Generic;
using System.Data.Entity;

namespace CoffeeTracker.Model
{
    public class MockDataDatabaseInitializer : DropCreateDatabaseIfModelChanges<CoffeeTrackerContext>
    {
        protected override void Seed(CoffeeTrackerContext context)
        {
            base.Seed(context);

            var coffeeEntries = new List<CoffeeEntry>();

            for (int i = 100; i > 0; i--)
            {
                var entry = new CoffeeEntry
                {
                    CoffeeType = "Espresso" + (i % 2 == 0 ? " Doppio" : "Macchiato"),
                    ItemPrice = 2.3M,
                    Location = Faker.Address.City(),
                    Quantity = i % 3 == 0 ? 2 : 1,
                    Date = DateTime.Now.AddDays(-0.25 * i)
                };

                coffeeEntries.Add(entry);
            }

            context.BulkInsert(coffeeEntries);
        }
    }
}
