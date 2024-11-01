using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BakeryAPI.Models
{
    public class Product
    {
        [Key]
        public Guid ProductId { get; set; } = Guid.NewGuid();
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public Decimal ProductPrice { get; set; }
        public int ProductQuantity { get; set; }

        [ForeignKey("SupplierId")]
        public Guid SupplierId { get; set; }
        public Supplier? Supplier { get; set; }
    }
}
