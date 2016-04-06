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
            var random = new Random(1000);

            for (int i = 1000; i > 0; i--)
            {
                var entry = new CoffeeEntry
                {
                    CoffeeType = GetRandomCoffeeType(random),
                    ItemPrice = 2.3M,
                    Location = Faker.Address.City(),
                    Quantity = i % 3 == 0 ? 2 : 1,
                    Date = DateTime.Now.AddDays(-0.25 * i)
                };

                coffeeEntries.Add(entry);
            }

            context.BulkInsert(coffeeEntries);
        }

        private static string GetRandomCoffeeType(Random r)
        {
            var pos = r.Next(0, CoffeeTypes.Length);
            return CoffeeTypes[pos];
        }

        private static readonly string[] CoffeeTypes = new[] 
        {
            "Added milk, sweeteners and substitutes", "Drip or filtered coffee", "French press or cafetière",
            "Percolated", "Turkish coffee", "Cold brew", "Vacuum coffee", "Espresso and variations", "Caffè Americano",
            "Café Cubano", "Caffè crema", "Cafe Zorro", "Doppio", "Espresso Romano", "Guillermo", "Ristretto",
            "Espresso with milk", "Antoccino", "Breve", "Café bombón", "Cappuccino", "Cortado", "Latte", "Latte macchiato",
            "Espressino", "Flat white", "Galão", "Macchiato", "Wiener or Viennese melange", "Coffee with milk",
            "Café au lait", "Ca phe sua da", "Egg coffee", "Eggnog latte", "Eiskaffee", "Kopi susu", "White coffee",
            "White coffee (England)", "Coffee or espresso with whipped cream", "Vienna coffee", "Espresso con panna",
            "Combinations", "Coffee with espresso", "Coffee with tea", "Black tie", "Chai latte", "Red tie", "Yuanyang",
            "Coffee with alcohol", "Liqueur coffee", "Irish coffee", "Rüdesheimer Kaffee", "Pharisäer", "Carajillo",
            "Flavoured", "Melya", "Caffè Marocchino", "Café miel", "Mocha or café mocha or mochaccino", "Café de olla",
            "Miscellaneous", "Iced", "Greek frappé coffee", "Mazagran", "Palazzo", "Ice Shot", "Instant coffee", "Canned coffee",
            "Coffee milk", "Decaffeinated", "Other", "Affogato", "Caffè Medici", "Café Touba", "Indian filter coffee", "Moka", "Shakerato", "Pocillo"
        };
    }
}
