// Mock API for Scalify Demo
// DEMO VERSION: License pre-activated, empty database, login with admin/admin
// Data is NOT persisted - refreshing the page resets everything

const STORAGE_KEY = 'scalify_demo_data';

// DEMO: Empty/clean data structure with license already activated
const defaultData = {
    license: {
        id: 1,
        is_active: true,
        registered: true,  // Skip registration page
        license_key: 'DEMO-VERSION',
        license_type: 'demo',
        client_name: 'Demo User',
        activation_date: new Date().toISOString().split('T')[0]
    },
    products: [],      // Empty - clean demo
    categories: [],    // Empty - clean demo
    customers: [],     // Empty - clean demo
    suppliers: [],     // Empty - clean demo
    users: [
        { id: 1, username: 'admin', password_hash: 'admin', role: 'admin', full_name: 'Administrateur Demo', active: true },
    ],
    sales: [],
    settings: {
        store_name: 'Demo Store',
        store_address: 'Version Démo',
        store_phone: '',
        currency: 'DA',
        tax_rate: 0,
        receipt_footer: 'Merci de votre visite !'
    },
};

// DEMO: Always return fresh default data (no localStorage persistence on load)
function loadData() {
    console.log('🎮 DEMO MODE: Loading fresh empty data');
    return JSON.parse(JSON.stringify(defaultData));
}

// DEMO: saveData does nothing - data is not persisted
function saveData() {
    console.log('🎮 DEMO MODE: Data NOT saved (demo version)');
    // In demo mode, we don't actually save to localStorage
    // Data will be lost on refresh
}

// Initialize mockData (fresh on every page load)
const mockData = loadData();

window.api = {
    // License - always returns active for demo
    license: {
        check: () => Promise.resolve(mockData.license),
        activate: (key) => {
            // Demo is already activated
            console.log('🎮 DEMO: License already active');
            return Promise.resolve({ success: true, license: mockData.license });
        },
        deactivate: () => {
            console.log('🎮 DEMO: Cannot deactivate demo license');
            return Promise.resolve({ success: false, error: 'Version démo' });
        }
    },

    // Auth
    auth: {
        login: (u, p) => {
            console.log('🔐 Login attempt:', { username: u, password: p });
            const user = mockData.users.find(x => x.username === u && x.password_hash === p);
            if (user) {
                console.log('✅ Login successful:', user.username);
                return Promise.resolve({ success: true, user });
            }
            console.log('❌ Login failed');
            return Promise.resolve({ success: false, error: 'Identifiants incorrects. Utilisez: admin / admin' });
        },
        register: (userData) => {
            // Demo doesn't need registration, but allow it anyway
            const id = mockData.users.length ? Math.max(...mockData.users.map(u => u.id)) + 1 : 1;
            const newUser = {
                id,
                username: userData.username,
                password_hash: userData.password,
                role: userData.role || 'admin',
                full_name: userData.fullName,
                active: true
            };
            mockData.users.push(newUser);
            return Promise.resolve({ success: true, user: newUser });
        },
        updateProfile: (userId, newData) => {
            const idx = mockData.users.findIndex(u => u.id === userId);
            if (idx !== -1) {
                if (newData.password) mockData.users[idx].password_hash = newData.password;
                if (newData.username) mockData.users[idx].username = newData.username;
                return Promise.resolve({ success: true });
            }
            return Promise.resolve({ success: false, error: 'Utilisateur non trouvé' });
        }
    },

    // Products
    products: {
        getAll: () => Promise.resolve([...mockData.products]),
        getById: (id) => Promise.resolve(mockData.products.find(p => p.id === id)),
        create: (p) => {
            const id = mockData.products.length ? Math.max(...mockData.products.map(x => x.id)) + 1 : 1;
            const cat = mockData.categories.find(c => c.id === p.category_id);
            const newProduct = { id, category_name: cat?.name || null, stock_quantity: 0, stock_min: 5, unit: 'pièce', ...p };
            mockData.products.push(newProduct);
            return Promise.resolve({ id });
        },
        update: (id, p) => {
            const idx = mockData.products.findIndex(x => x.id === id);
            if (idx !== -1) {
                if (p.category_id) {
                    const cat = mockData.categories.find(c => c.id === p.category_id);
                    p.category_name = cat?.name || null;
                }
                Object.assign(mockData.products[idx], p);
            }
            return Promise.resolve({ success: true });
        },
        delete: (id) => {
            mockData.products = mockData.products.filter(p => p.id !== id);
            return Promise.resolve({ success: true });
        },
        search: (q) => {
            const query = q.toLowerCase();
            return Promise.resolve(mockData.products.filter(p =>
                p.name.toLowerCase().includes(query) || (p.barcode && p.barcode.includes(q))
            ).slice(0, 10));
        }
    },

    // Categories
    categories: {
        getAll: () => Promise.resolve([...mockData.categories]),
        create: (c) => {
            const id = mockData.categories.length ? Math.max(...mockData.categories.map(x => x.id)) + 1 : 1;
            mockData.categories.push({ id, ...c });
            return Promise.resolve({ id });
        },
        update: (id, c) => {
            const idx = mockData.categories.findIndex(x => x.id === id);
            if (idx !== -1) {
                Object.assign(mockData.categories[idx], c);
                mockData.products.forEach(p => {
                    if (p.category_id === id) p.category_name = c.name;
                });
            }
            return Promise.resolve({ success: true });
        },
        delete: (id) => {
            mockData.categories = mockData.categories.filter(c => c.id !== id);
            mockData.products.forEach(p => {
                if (p.category_id === id) {
                    p.category_id = null;
                    p.category_name = null;
                }
            });
            return Promise.resolve({ success: true });
        }
    },

    // Sales
    sales: {
        getAll: (filters = {}) => {
            let sales = [...mockData.sales];
            if (filters.startDate) {
                sales = sales.filter(s => {
                    const saleDate = new Date(s.sale_date).toISOString().split('T')[0];
                    return saleDate >= filters.startDate;
                });
            }
            if (filters.endDate) {
                sales = sales.filter(s => {
                    const saleDate = new Date(s.sale_date).toISOString().split('T')[0];
                    return saleDate <= filters.endDate;
                });
            }
            return Promise.resolve(sales);
        },
        getById: (id) => Promise.resolve(mockData.sales.find(s => s.id === id)),
        create: (sale) => {
            try {
                if (!sale.items || sale.items.length === 0) {
                    return Promise.reject(new Error('Aucun article dans la vente'));
                }
                const id = mockData.sales.length ? Math.max(...mockData.sales.map(x => x.id)) + 1 : 1;
                const today = new Date().toISOString().split('T')[0].replace(/-/g, '');
                const sale_number = `V${today}-${String(id).padStart(4, '0')}`;
                let customer_name = null;
                if (sale.customer_id) {
                    const customer = mockData.customers.find(c => c.id === sale.customer_id);
                    if (customer) customer_name = customer.name;
                }
                const newSale = { id, sale_number, sale_date: new Date().toISOString(), customer_name, ...sale };
                mockData.sales.push(newSale);
                // Update stock
                for (const item of sale.items) {
                    if (item.product_id) {
                        const pIdx = mockData.products.findIndex(p => p.id === item.product_id);
                        if (pIdx !== -1) {
                            mockData.products[pIdx].stock_quantity = Math.max(0, mockData.products[pIdx].stock_quantity - item.quantity);
                        }
                    }
                }
                return Promise.resolve(newSale);
            } catch (error) {
                return Promise.reject(error);
            }
        },
        update: (id, updates) => {
            const idx = mockData.sales.findIndex(s => s.id === id);
            if (idx !== -1) {
                const originalSale = mockData.sales[idx];
                const updatedSale = { ...originalSale, ...updates, id: originalSale.id, sale_number: originalSale.sale_number, sale_date: originalSale.sale_date };
                mockData.sales[idx] = updatedSale;
                return Promise.resolve(updatedSale);
            }
            return Promise.resolve({ success: false, error: 'Vente non trouvée' });
        },
        delete: (id) => {
            const idx = mockData.sales.findIndex(s => s.id === id);
            if (idx !== -1) {
                mockData.sales.splice(idx, 1);
                return Promise.resolve({ success: true });
            }
            return Promise.resolve({ success: false, error: 'Vente non trouvée' });
        }
    },

    // Customers
    customers: {
        getAll: () => Promise.resolve([...mockData.customers]),
        getById: (id) => Promise.resolve(mockData.customers.find(c => c.id === id)),
        create: (c) => {
            const id = mockData.customers.length ? Math.max(...mockData.customers.map(x => x.id)) + 1 : 1;
            mockData.customers.push({ id, loyalty_points: 0, credit_balance: 0, ...c });
            return Promise.resolve({ id });
        },
        update: (id, c) => {
            const idx = mockData.customers.findIndex(x => x.id === id);
            if (idx !== -1) {
                Object.assign(mockData.customers[idx], c);
            }
            return Promise.resolve({ success: true });
        },
        delete: (id) => {
            mockData.customers = mockData.customers.filter(c => c.id !== id);
            return Promise.resolve({ success: true });
        }
    },

    // Suppliers
    suppliers: {
        getAll: () => Promise.resolve([...mockData.suppliers]),
        create: (s) => {
            const id = mockData.suppliers.length ? Math.max(...mockData.suppliers.map(x => x.id)) + 1 : 1;
            mockData.suppliers.push({ id, ...s });
            return Promise.resolve({ id });
        },
        update: (id, s) => {
            const idx = mockData.suppliers.findIndex(x => x.id === id);
            if (idx !== -1) {
                Object.assign(mockData.suppliers[idx], s);
            }
            return Promise.resolve({ success: true });
        },
        delete: (id) => {
            mockData.suppliers = mockData.suppliers.filter(s => s.id !== id);
            return Promise.resolve({ success: true });
        }
    },

    // Stock
    stock: {
        getLowStock: () => Promise.resolve(mockData.products.filter(p => p.stock_quantity <= p.stock_min)),
        getExpiring: () => Promise.resolve([]),
        updateQuantity: (id, qty, type) => {
            const p = mockData.products.find(x => x.id === id);
            if (p) {
                p.stock_quantity += (type === 'add' ? qty : -qty);
            }
            return Promise.resolve({ success: true });
        }
    },

    // Dashboard
    dashboard: {
        getStats: () => {
            const todaySales = mockData.sales.filter(s => s.sale_date?.startsWith(new Date().toISOString().split('T')[0]));
            return Promise.resolve({
                today: { count: todaySales.length, total: todaySales.reduce((s, x) => s + (x.total || 0), 0) },
                week: { count: mockData.sales.length, total: mockData.sales.reduce((s, x) => s + (x.total || 0), 0) },
                month: { count: mockData.sales.length, total: mockData.sales.reduce((s, x) => s + (x.total || 0), 0) },
                topProducts: mockData.products.slice(0, 5).map(p => ({ name: p.name, total_quantity: 0 })),
                alerts: { lowStock: mockData.products.filter(p => p.stock_quantity <= p.stock_min).length, expiring: 0 },
                counts: { products: mockData.products.length, customers: mockData.customers.length }
            });
        }
    },

    // Settings
    settings: {
        get: () => Promise.resolve({ ...mockData.settings }),
        update: (s) => {
            Object.assign(mockData.settings, s);
            return Promise.resolve(mockData.settings);
        }
    },

    // Backup
    backup: {
        create: () => Promise.resolve({ success: true, path: 'demo-backup.json' }),
        restore: () => Promise.resolve({ success: true }),
        reset: () => {
            Object.assign(mockData, JSON.parse(JSON.stringify(defaultData)));
            return Promise.resolve({ success: true });
        }
    },

    // Purchases (empty for demo)
    purchases: {
        getAll: () => Promise.resolve([]),
        getById: (id) => Promise.resolve(null),
        create: (p) => Promise.resolve({ id: 1, ...p }),
        update: (id, p) => Promise.resolve({ success: true }),
        delete: (id) => Promise.resolve({ success: true })
    },

    // Expenses (empty for demo)
    expenses: {
        getAll: () => Promise.resolve([]),
        getById: (id) => Promise.resolve(null),
        create: (e) => Promise.resolve({ id: 1, ...e }),
        update: (id, e) => Promise.resolve({ success: true }),
        delete: (id) => Promise.resolve({ success: true }),
        getStats: () => Promise.resolve({ total: 0, count: 0, byCategory: [] }),
        getCategories: () => Promise.resolve([]),
        getBudget: () => Promise.resolve({ monthly: 0, used: 0 }),
        setBudget: (b) => Promise.resolve({ success: true })
    },

    // Debts (empty for demo)
    debts: {
        getAll: () => Promise.resolve([]),
        getById: (id) => Promise.resolve(null),
        create: (d) => Promise.resolve({ id: 1, ...d }),
        update: (id, d) => Promise.resolve({ success: true }),
        delete: (id) => Promise.resolve({ success: true }),
        addPayment: (id, p) => Promise.resolve({ success: true })
    },

    // Notifications (empty for demo)
    notifications: {
        getAll: () => Promise.resolve([]),
        markAsRead: (id) => Promise.resolve({ success: true }),
        markAllAsRead: () => Promise.resolve({ success: true }),
        delete: (id) => Promise.resolve({ success: true })
    },

    // Users management
    users: {
        getAll: () => Promise.resolve([...mockData.users]),
        getById: (id) => Promise.resolve(mockData.users.find(u => u.id === id)),
        create: (u) => {
            const id = mockData.users.length ? Math.max(...mockData.users.map(x => x.id)) + 1 : 1;
            const newUser = { id, active: true, ...u };
            mockData.users.push(newUser);
            return Promise.resolve({ id });
        },
        update: (id, u) => {
            const idx = mockData.users.findIndex(x => x.id === id);
            if (idx !== -1) Object.assign(mockData.users[idx], u);
            return Promise.resolve({ success: true });
        },
        delete: (id) => {
            mockData.users = mockData.users.filter(u => u.id !== id);
            return Promise.resolve({ success: true });
        }
    },

    // HR/Employees (empty for demo)
    employees: {
        getAll: () => Promise.resolve([]),
        getById: (id) => Promise.resolve(null),
        create: (e) => Promise.resolve({ id: 1, ...e }),
        update: (id, e) => Promise.resolve({ success: true }),
        delete: (id) => Promise.resolve({ success: true })
    },

    hr: {
        getEmployees: () => Promise.resolve([]),
        getPayroll: () => Promise.resolve([]),
        getAttendance: () => Promise.resolve([])
    },

    // Invoices (empty for demo)
    invoices: {
        getAll: () => Promise.resolve([]),
        getById: (id) => Promise.resolve(null),
        create: (i) => Promise.resolve({ id: 1, ...i }),
        update: (id, i) => Promise.resolve({ success: true }),
        delete: (id) => Promise.resolve({ success: true }),
        generatePDF: (id) => Promise.resolve({ success: true, path: 'invoice.pdf' })
    }
};

// Add stock update listener (for real-time updates)
window.api.stock.onStockUpdate = (callback) => {
    // Return unsubscribe function
    return () => { };
};

console.log('🎮 SCALIFY DEMO MODE');
console.log('👤 Login with: admin / admin');
console.log('⚠️ Data will NOT be saved - refresh resets everything');
