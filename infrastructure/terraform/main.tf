provider "aws" {
  region = "us-west-2"
}

resource "aws_eks_cluster" "aintelligent_oddz_cluster" {
  name     = "aintelligent-oddz-cluster"
  role_arn = aws_iam_role.eks_cluster_role.arn

  vpc_config {
    subnet_ids = ["subnet-12345678", "subnet-87654321"]
  }

  # Other configurations...
}

# Add more resources as needed

