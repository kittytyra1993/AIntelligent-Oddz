output "cluster_endpoint" {
  description = "Endpoint for EKS control plane"
  value       = aws_eks_cluster.aintelligent_oddz_cluster.endpoint
}

# Add more outputs as needed

