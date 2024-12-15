import { Cloud, Database, FunctionSquare, Server } from 'lucide-react';

export const cloudServices = [
  {
    category: 'Compute',
    items: [
      { id: 'lambda', name: 'Lambda Function', icon: FunctionSquare },
      { id: 'ec2', name: 'EC2 Instance', icon: Server }
    ]
  },
  {
    category: 'Storage',
    items: [
      { id: 's3', name: 'S3 Bucket', icon: Database },
      { id: 'dynamodb', name: 'DynamoDB', icon: Database }
    ]
  },
  {
    category: 'Network',
    items: [
      { id: 'vpc', name: 'VPC', icon: Cloud },
      { id: 'subnet', name: 'Subnet', icon: Cloud }
    ]
  }
];