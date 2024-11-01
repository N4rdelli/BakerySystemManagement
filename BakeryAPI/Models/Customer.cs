using System.ComponentModel.DataAnnotations;

namespace BakeryAPI.Models
{
    public class Customer
    {
        [Key]
        public Guid CustomerId { get; set; } = Guid.NewGuid();
        public string CustomerName { get; set; }
        public string CustomerCpfCnpj { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerPhone { get; set; }
        public bool CustomerStatus { get; set; }

        public ICollection<Sale> ? Sales { get; set; } = new List<Sale>();

    }
}
