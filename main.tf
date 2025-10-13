# Grupo de seguridad vulnerable (SSH abierto al mundo)
resource "aws_security_group" "sg_inseguro" {
  name        = "sg-inseguro"
  description = "SG inseguro para pruebas Checkov"
  vpc_id      = "vpc-123456"

  ingress {
    description = "SSH abierto"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Bucket S3 vulnerable (sin cifrado)
resource "aws_s3_bucket" "bucket_inseguro" {
  bucket = "prueba-checkov-inseguro-demo-12345"
}

# Configuración insegura de bucket (Permite público)
resource "aws_s3_bucket_public_access_block" "bloqueo_publico" {
  bucket = aws_s3_bucket.bucket_inseguro.id
  block_public_acls   = false
  block_public_policy = false
}
