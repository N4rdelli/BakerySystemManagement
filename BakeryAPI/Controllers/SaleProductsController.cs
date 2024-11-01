using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BakeryAPI.Data;
using BakeryAPI.Models;

namespace BakeryAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleProductsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SaleProductsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/SaleProducts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SaleProduct>>> GetSaleProduct()
        {
            return await _context.SaleProduct.ToListAsync();
        }

        // GET: api/SaleProducts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SaleProduct>> GetSaleProduct(Guid id)
        {
            var saleProduct = await _context.SaleProduct.FindAsync(id);

            if (saleProduct == null)
            {
                return NotFound();
            }

            return saleProduct;
        }

        // PUT: api/SaleProducts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSaleProduct(Guid id, SaleProduct saleProduct)
        {
            if (id != saleProduct.SaleProductId)
            {
                return BadRequest();
            }

            _context.Entry(saleProduct).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SaleProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SaleProducts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SaleProduct>> PostSaleProduct(SaleProduct saleProduct)
        {
            _context.SaleProduct.Add(saleProduct);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSaleProduct", new { id = saleProduct.SaleProductId }, saleProduct);
        }

        // DELETE: api/SaleProducts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSaleProduct(Guid id)
        {
            var saleProduct = await _context.SaleProduct.FindAsync(id);
            if (saleProduct == null)
            {
                return NotFound();
            }

            _context.SaleProduct.Remove(saleProduct);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SaleProductExists(Guid id)
        {
            return _context.SaleProduct.Any(e => e.SaleProductId == id);
        }
    }
}
