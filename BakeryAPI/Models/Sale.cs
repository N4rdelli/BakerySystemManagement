using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BakeryAPI.Models
{
    public class Sale
    {
        [Key]
        public Guid SaleId { get; set; } = Guid.NewGuid();
        public DateTime SaleDate { get; set; }

        [ForeignKey("CostumerId")]
        public Guid CustomerId { get; set; }
        public Decimal SaleTotalValue { get; set; }

        public Customer? Customer { get; set; }
        public ICollection<SaleProduct>? SaleProducts { get; set; } = new List<SaleProduct>();
    }
}
