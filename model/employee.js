class Employee {
    constructor(connection) {
        this.connection = connection;
    }
    viewAllEmployees() {
        connection.query( 
        function(err, res) {
          if (err) throw err
          console.table(res)
          startPrompt()
      })
    }
    create(productData) {
        return new Promise((resolve, reject) => {
            this.connection.query(
                "INSERT INTO products SET ?",
                productData,
                function (err, data) {
                    if (err) { return reject(err) }
                    else { return resolve(data) }
                }
            );
        })
    }
    /**
     * Return a list of all icecream flavors
     */
    read() {
        return new Promise((resolve, reject) => {
            this.connection.query(
                "SELECT * FROM products",
                function (err, data) {
                    if (err) { return reject(err) }
                    else { return resolve(data) }
                }
            );
        });
    }
    updateCountByFlavor(quantity, flavor) {
        return new Promise((resolve, reject) => {
            const query = this.connection.query(
                "UPDATE products SET ? WHERE ?",  // UPDATE products SET quantity=100 WHERE flavor="Rocky Road";
                [{ quantity }, { flavor }],
                function (err, data) {
                    if (err) { return reject(err) }
                    else { return resolve(data) }
                }
            );
        });
    }
    deleteById(id) {
        return new Promise((resolve, reject) => {
            const query = this.connection.query(
                "DELETE FROM products WHERE id = ?",  // UPDATE products SET quantity=100 WHERE flavor="Rocky Road";
                [id],
                function (err, data) {
                    if (err) { return reject(err) }
                    else { return resolve(data) }
                }
            );
        });
    }
}

module.exports = Employee;