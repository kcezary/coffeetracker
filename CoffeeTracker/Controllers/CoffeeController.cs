using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using CoffeeTracker.Model;
using System;

namespace CoffeeTracker.Controllers
{
    public class CoffeeController : ApiController
    {
        private CoffeeTrackerContext db = new CoffeeTrackerContext();

        public IQueryable<CoffeeEntry> GetCoffeeEntries()
        {
            return db.CoffeeEntries.OrderByDescending(x => x.Date);
        }

        [ResponseType(typeof(CoffeeEntry))]
        public async Task<IHttpActionResult> GetCoffeeEntry(int id)
        {
            CoffeeEntry coffeeEntry = await db.CoffeeEntries.FindAsync(id);
            if (coffeeEntry == null)
            {
                return NotFound();
            }

            return Ok(coffeeEntry);
        }

        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCoffeeEntry(int id, CoffeeEntry coffeeEntry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != coffeeEntry.Id)
            {
                return BadRequest();
            }

            db.Entry(coffeeEntry).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CoffeeEntryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [ResponseType(typeof(CoffeeEntry))]
        public async Task<IHttpActionResult> PostCoffeeEntry(CoffeeEntry coffeeEntry)
        {
            coffeeEntry.Date = DateTime.Now;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CoffeeEntries.Add(coffeeEntry);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = coffeeEntry.Id }, coffeeEntry);
        }

        [ResponseType(typeof(CoffeeEntry))]
        public async Task<IHttpActionResult> DeleteCoffeeEntry(int id)
        {
            CoffeeEntry coffeeEntry = await db.CoffeeEntries.FindAsync(id);
            if (coffeeEntry == null)
            {
                return NotFound();
            }

            db.CoffeeEntries.Remove(coffeeEntry);
            await db.SaveChangesAsync();

            return Ok(coffeeEntry);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CoffeeEntryExists(int id)
        {
            return db.CoffeeEntries.Count(e => e.Id == id) > 0;
        }
    }
}