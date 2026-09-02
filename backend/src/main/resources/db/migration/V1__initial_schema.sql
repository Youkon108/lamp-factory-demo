CREATE TABLE categories (
  id BIGINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL,
  description TEXT,
  PRIMARY KEY (id),
  UNIQUE KEY uk_categories_name (name)
);

CREATE TABLE products (
  id BIGINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(180) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(120) NOT NULL,
  price DECIMAL(12,2) NOT NULL,
  moq INT NOT NULL,
  specifications TEXT,
  image VARCHAR(500),
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  updated_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  INDEX idx_products_category (category),
  INDEX idx_products_active (active)
);

CREATE TABLE customer_inquiries (
  id BIGINT NOT NULL AUTO_INCREMENT,
  customer_name VARCHAR(120) NOT NULL,
  company VARCHAR(160) NOT NULL,
  email VARCHAR(180) NOT NULL,
  phone VARCHAR(40),
  product_id BIGINT,
  quantity INT NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(40) NOT NULL DEFAULT 'NEW',
  created_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  INDEX idx_inquiries_created_at (created_at),
  CONSTRAINT fk_inquiries_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL
);

CREATE TABLE quote_requests (
  id BIGINT NOT NULL AUTO_INCREMENT,
  customer_name VARCHAR(120) NOT NULL,
  company VARCHAR(160) NOT NULL,
  email VARCHAR(180) NOT NULL,
  product_id BIGINT,
  quantity INT NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(40) NOT NULL DEFAULT 'NEW',
  created_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  INDEX idx_quotes_created_at (created_at),
  CONSTRAINT fk_quotes_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL
);
