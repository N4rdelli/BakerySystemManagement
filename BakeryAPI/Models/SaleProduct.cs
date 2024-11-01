using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BakeryAPI.Models
{
    public class SaleProduct
    {
        [Key]
        public Guid SaleProductId { get; set; }

        [ForeignKey("SaleId")]
        public Guid SaleId { get; set; }

        [ForeignKey("ProductId")]
        public Guid ProductId { get; set; }
        public int SaleProductQuantity { get; set; }

        public Sale? Sale { get; set; }
        public Product? Product { get; set; }
    }
}
