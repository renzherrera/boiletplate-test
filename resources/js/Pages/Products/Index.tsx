import { Head, Link, router } from '@inertiajs/react';
import { Button, Table, Tag, Space, Popconfirm, Input } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

interface Category {
    id: number;
    name: string;
    type: string;
}

interface Product {
    id: number;
    sku: string;
    name: string;
    category: Category;
    selling_price: number;
    cost_price: number;
    stock_quantity: number;
    min_stock_level: number;
    unit: string;
    is_active: boolean;
}

interface ProductsPageProps {
    products: {
        data: Product[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

export default function Index({ products }: ProductsPageProps) {
    const handleDelete = (id: number) => {
        router.delete(route('products.destroy', id));
    };

    const columns: ColumnsType<Product> = [
        {
            title: 'SKU',
            dataIndex: 'sku',
            key: 'sku',
            width: 120,
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                    <Input
                        placeholder="Search product"
                        value={selectedKeys[0]}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => confirm()}
                        style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                </div>
            ),
            filterIcon: <SearchOutlined />,
        },
        {
            title: 'Category',
            dataIndex: ['category', 'name'],
            key: 'category',
            render: (text: string, record: Product) => (
                <Tag color={
                    record.category.type === 'frozen_foods' ? 'blue' :
                    record.category.type === 'horeca' ? 'green' : 'orange'
                }>
                    {text}
                </Tag>
            ),
        },
        {
            title: 'Cost Price',
            dataIndex: 'cost_price',
            key: 'cost_price',
            render: (price: number) => `₱${Number(price).toFixed(2)}`,
            align: 'right',
        },
        {
            title: 'Selling Price',
            dataIndex: 'selling_price',
            key: 'selling_price',
            render: (price: number) => `₱${Number(price).toFixed(2)}`,
            align: 'right',
        },
        {
            title: 'Stock',
            dataIndex: 'stock_quantity',
            key: 'stock_quantity',
            render: (stock: number, record: Product) => (
                <Tag color={stock <= record.min_stock_level ? 'red' : 'green'}>
                    {stock} {record.unit}
                </Tag>
            ),
            align: 'center',
        },
        {
            title: 'Status',
            dataIndex: 'is_active',
            key: 'is_active',
            render: (active: boolean) => (
                <Tag color={active ? 'success' : 'default'}>
                    {active ? 'Active' : 'Inactive'}
                </Tag>
            ),
            align: 'center',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record: Product) => (
                <Space size="small">
                    <Button
                        type="link"
                        icon={<EditOutlined />}
                        onClick={() => router.visit(route('products.edit', record.id))}
                    >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Delete product"
                        description="Are you sure you want to delete this product?"
                        onConfirm={() => handleDelete(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="link" danger icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Head title="Products" />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                    Product Management
                </h1>
                <Link href={route('products.create')}>
                    <Button type="primary" icon={<PlusOutlined />} size="large">
                        Add Product
                    </Button>
                </Link>
            </div>

            <Table
                columns={columns}
                dataSource={products.data}
                rowKey="id"
                pagination={{
                    current: products.current_page,
                    pageSize: products.per_page,
                    total: products.total,
                    showSizeChanger: true,
                    showTotal: (total) => `Total ${total} products`,
                }}
            />
        </>
    );
}
