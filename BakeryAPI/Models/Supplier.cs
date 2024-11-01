using System.ComponentModel.DataAnnotations;

namespace BakeryAPI.Models
{
    public class Supplier
    {
        [Key]
        public Guid SupplierId { get; set; } = Guid.NewGuid();
        public string SupplierCompanyName { get; set; }
        public string SupplierCnpj { get; set; }
        public string SupplierAddress { get; set; }
        public string SupplierPhone { get; set; }
        public string SupplierEmail { get; set; }
    }
}
