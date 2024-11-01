using Microsoft.EntityFrameworkCore;
using BakeryAPI.Models;

namespace BakeryAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<BakeryAPI.Models.Customer> Customer { get; set; } = default!;
        public DbSet<BakeryAPI.Models.Product> Product { get; set; } = default!;
        public DbSet<BakeryAPI.Models.Sale> Sale { get; set; } = default!;
        public DbSet<BakeryAPI.Models.Supplier> Supplier { get; set; } = default!;
        public DbSet<BakeryAPI.Models.SaleProduct> SaleProduct { get; set; } = default!;

    }
}
