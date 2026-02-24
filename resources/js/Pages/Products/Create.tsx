import { Head, Link, useForm } from '@inertiajs/react';
import { Form, Input, InputNumber, Select, Button, Card, DatePicker, Switch } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

interface Category {
    id: number;
    name: string;
    type: string;
}

interface CreatePageProps {
    categories: Category[];
}

export default function Create({ categories }: CreatePageProps) {
    const { data, setData, post, processing, errors } = useForm({
        category_id: '',
        sku: '',
        name: '',
        description: '',
        cost_price: 0,
        selling_price: 0,
        unit: '',
        stock_quantity: 0,
        min_stock_level: 0,
        storage_temp: '',
        expiry_date: '',
        brand: '',
        supplier_sku: '',
        is_active: true,
    });

    const handleSubmit = () => {
        post(route('products.store'));
    };

    return (
        <>
            <Head title="Create Product" />

            <div style={{ marginBottom: '24px' }}>
                <Link href={route('products.index')}>
                    <Button icon={<ArrowLeftOutlined />}>Back to Products</Button>
                </Link>
            </div>

            <Card title="Create New Product">
                <Form layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label="Category"
                        validateStatus={errors.category_id ? 'error' : ''}
                        help={errors.category_id}
                        required
                    >
                        <Select
                            placeholder="Select category"
                            value={data.category_id || undefined}
                            onChange={(value) => setData('category_id', value)}
                            size="large"
                        >
                            {categories.map((cat) => (
                                <Select.Option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="SKU"
                        validateStatus={errors.sku ? 'error' : ''}
                        help={errors.sku}
                        required
                    >
                        <Input
                            value={data.sku}
                            onChange={(e) => setData('sku', e.target.value)}
                            placeholder="e.g., FRZ-001"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Product Name"
                        validateStatus={errors.name ? 'error' : ''}
                        help={errors.name}
                        required
                    >
                        <Input
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Enter product name"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item label="Description">
                        <Input.TextArea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            rows={3}
                        />
                    </Form.Item>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <Form.Item
                            label="Cost Price"
                            validateStatus={errors.cost_price ? 'error' : ''}
                            help={errors.cost_price}
                            required
                        >
                            <InputNumber
                                value={data.cost_price}
                                onChange={(value) => setData('cost_price', value || 0)}
                                prefix="₱"
                                style={{ width: '100%' }}
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Selling Price"
                            validateStatus={errors.selling_price ? 'error' : ''}
                            help={errors.selling_price}
                            required
                        >
                            <InputNumber
                                value={data.selling_price}
                                onChange={(value) => setData('selling_price', value || 0)}
                                prefix="₱"
                                style={{ width: '100%' }}
                                size="large"
                            />
                        </Form.Item>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                        <Form.Item label="Unit" required>
                            <Input
                                value={data.unit}
                                onChange={(e) => setData('unit', e.target.value)}
                                placeholder="kg, pcs, box"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item label="Stock Quantity" required>
                            <InputNumber
                                value={data.stock_quantity}
                                onChange={(value) => setData('stock_quantity', value || 0)}
                                style={{ width: '100%' }}
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item label="Min Stock Level" required>
                            <InputNumber
                                value={data.min_stock_level}
                                onChange={(value) => setData('min_stock_level', value || 0)}
                                style={{ width: '100%' }}
                                size="large"
                            />
                        </Form.Item>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <Form.Item label="Storage Temperature">
                            <Input
                                value={data.storage_temp}
                                onChange={(e) => setData('storage_temp', e.target.value)}
                                placeholder="e.g., -18°C"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item label="Brand">
                            <Input
                                value={data.brand}
                                onChange={(e) => setData('brand', e.target.value)}
                                placeholder="Brand name"
                                size="large"
                            />
                        </Form.Item>
                    </div>

                    <Form.Item label="Active">
                        <Switch
                            checked={data.is_active}
                            onChange={(checked) => setData('is_active', checked)}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={processing}
                            size="large"
                        >
                            Create Product
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    );
}
