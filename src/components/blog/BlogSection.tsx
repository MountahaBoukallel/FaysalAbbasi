import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Calendar, User, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  category: string;
  date: string;
  author: string;
}

const BlogSection = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Strategic Safety Management in Oil & Gas Operations",
      content: "As HSE professionals in the oil and gas industry, we face unique challenges that require comprehensive safety management strategies. My experience with Saudi Aramco has taught me the importance of systematic approach to risk management...",
      category: "Safety Management",
      date: "2024-01-15",
      author: "Faisal Pervez"
    },
    {
      id: 2,
      title: "Zero-Incident Achievement: Lessons from 28,461 Equipment Relocations",
      content: "Achieving zero incidents during the massive equipment relocation project at Aramco was no accident. It required meticulous planning, rigorous safety protocols, and unwavering commitment to HSE standards...",
      category: "Case Study",
      date: "2024-01-10",
      author: "Faisal Pervez"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPost) {
      // Update existing post
      setPosts(posts.map(post => 
        post.id === editingPost.id 
          ? { ...post, ...formData, date: new Date().toISOString().split('T')[0] }
          : post
      ));
      toast({
        title: "Post Updated",
        description: "Your blog post has been successfully updated.",
      });
    } else {
      // Create new post
      const newPost: BlogPost = {
        id: Date.now(),
        ...formData,
        date: new Date().toISOString().split('T')[0],
        author: "Faisal Pervez"
      };
      setPosts([newPost, ...posts]);
      toast({
        title: "Post Created",
        description: "Your new blog post has been published.",
      });
    }

    setFormData({ title: "", content: "", category: "" });
    setEditingPost(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      category: post.category,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
    toast({
      title: "Post Deleted",
      description: "The blog post has been successfully deleted.",
      variant: "destructive",
    });
  };

  const categories = ["Safety Management", "Case Study", "Training", "Compliance", "Industry News"];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-foreground">HSE Blog & Updates</h2>
            <p className="text-xl text-muted-foreground">
              Insights, experiences, and updates from the field of health, safety, and environmental management
            </p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4" />
                New Post
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {editingPost ? "Edit Blog Post" : "Create New Blog Post"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter post title..."
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-2 border border-input bg-background rounded-md"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Write your blog post content here..."
                    rows={10}
                    required
                  />
                </div>
                
                <div className="flex gap-3 justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsDialogOpen(false);
                      setEditingPost(null);
                      setFormData({ title: "", content: "", category: "" });
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-primary hover:bg-primary/90">
                    {editingPost ? "Update Post" : "Publish Post"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="shadow-card border-0 bg-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-3 text-foreground leading-tight">
                      {post.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(post)}
                      className="gap-1"
                    >
                      <Edit className="h-3 w-3" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(post.id)}
                      className="gap-1 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {post.content.length > 300 
                    ? `${post.content.substring(0, 300)}...` 
                    : post.content
                  }
                </p>
                {post.content.length > 300 && (
                  <Button variant="link" className="mt-2 p-0 h-auto text-primary">
                    Read more
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">No blog posts yet.</p>
            <p className="text-muted-foreground">Click "New Post" to create your first blog post.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;